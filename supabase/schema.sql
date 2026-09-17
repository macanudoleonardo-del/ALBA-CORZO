-- Leads captured by the contact form (blueprint Phase 2).
-- Run this in the Supabase SQL editor.

create table if not exists public.leads (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text not null,
  email       text not null,
  whatsapp    text,
  company     text,
  topic       text,
  message     text not null,
  locale      text not null default 'es',
  handled     boolean not null default false
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);

-- Row Level Security: the site writes with the service role key, which
-- bypasses RLS. No anonymous client may read or write this table.
alter table public.leads enable row level security;

-- Deliberately no policies for anon/authenticated: leads are private.
-- Add a policy here only when the Phase 2 admin dashboard needs one.
