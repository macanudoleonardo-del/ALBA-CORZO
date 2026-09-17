import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";

type Lead = {
  name: string;
  email: string;
  whatsapp?: string;
  company?: string;
  topic?: string;
  message: string;
  locale?: string;
  website?: string; // honeypot
};

export async function POST(request: Request) {
  let body: Lead;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: pretend success so bots don't learn anything.
  if (body.website) return NextResponse.json({ ok: true });

  if (!body.name?.trim() || !body.email?.trim() || !body.message?.trim()) {
    return NextResponse.json({ error: "missing_fields" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  const lead = {
    name: body.name.trim().slice(0, 200),
    email: body.email.trim().toLowerCase().slice(0, 320),
    whatsapp: body.whatsapp?.trim().slice(0, 40) || null,
    company: body.company?.trim().slice(0, 200) || null,
    topic: body.topic?.trim().slice(0, 100) || null,
    message: body.message.trim().slice(0, 5000),
    locale: body.locale === "en" ? "en" : "es",
  };

  const supabase = getSupabaseAdmin();

  // Phase 2 of the blueprint wires Resend + the assistant's WhatsApp on top
  // of this. Until Supabase is configured we fail loudly rather than
  // silently dropping a real lead.
  if (!supabase) {
    console.error("[contact] Supabase not configured — lead not stored:", lead.email);
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  const { error } = await supabase.from("leads").insert(lead);
  if (error) {
    console.error("[contact] insert failed:", error.message);
    return NextResponse.json({ error: "storage_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
