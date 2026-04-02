"use client";

import { useMemo, useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { productCategories } from "@/lib/content/placeholders";
import type React from "react";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name"),
  mobile: z
    .string()
    .trim()
    .regex(/^[0-9]{10}$/, "Enter a valid 10-digit mobile number"),
  category: z.string().trim().min(2, "Select a category"),
  message: z.string().trim().min(5, "Please enter a short message"),
});

type FormState = z.infer<typeof schema>;

export function InquiryForm({ className }: { className?: string }) {
  const categories = useMemo(
    () => productCategories.map((c) => c.title),
    [],
  );
  const [state, setState] = useState<FormState>({
    name: "",
    mobile: "",
    category: categories[0] ?? "General",
    message: "",
  });
  const [status, setStatus] = useState<
    | { kind: "idle" }
    | { kind: "ok"; msg: string }
    | { kind: "err"; msg: string }
  >({ kind: "idle" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setErrors({});
    setStatus({ kind: "idle" });

    const parsed = schema.safeParse(state);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0]?.toString() ?? "form";
        next[k] = issue.message;
      }
      setErrors(next);
      return;
    }

    setStatus({
      kind: "ok",
      msg: "Thanks — please call 8698600990 or WhatsApp us so we can assist you right away.",
    });
    setState({
      name: "",
      mobile: "",
      category: categories[0] ?? "General",
      message: "",
    });
  }

  return (
    <form onSubmit={submit} className={cn("glass rounded-3xl p-7", className)}>
      <div className="flex items-start justify-between gap-6">
        <div>
          <div className="text-sm font-semibold text-brand">Inquiry</div>
          <h2 className="mt-2 text-xl font-semibold tracking-tight">
            Tell us what you need
          </h2>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">
            Share your details below, then reach us by phone or WhatsApp for a
            quick response.
          </p>
        </div>
        <div className="hidden rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground sm:block">
          Local service in Baramati
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Name" error={errors.name}>
          <input
            value={state.name}
            onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
            className="h-12 w-full rounded-2xl border border-border bg-background/60 px-4 text-sm outline-none focus:ring-2 focus:ring-ring"
            placeholder="Your name"
            autoComplete="name"
          />
        </Field>

        <Field label="Mobile Number" error={errors.mobile}>
          <input
            value={state.mobile}
            onChange={(e) =>
              setState((s) => ({ ...s, mobile: e.target.value.replace(/\D/g, "") }))
            }
            inputMode="numeric"
            className="h-12 w-full rounded-2xl border border-border bg-background/60 px-4 text-sm outline-none focus:ring-2 focus:ring-ring"
            placeholder="10-digit number"
            autoComplete="tel"
          />
        </Field>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Field label="Category" error={errors.category}>
          <select
            value={state.category}
            onChange={(e) => setState((s) => ({ ...s, category: e.target.value }))}
            className="h-12 w-full rounded-2xl border border-border bg-background/60 px-4 text-sm outline-none focus:ring-2 focus:ring-ring"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
            <option value="General">General</option>
          </select>
        </Field>

        <div className="flex items-end">
          <Button className="w-full" type="submit" size="lg">
            Done — contact us
          </Button>
        </div>
      </div>

      <div className="mt-4">
        <Field label="Message" error={errors.message}>
          <textarea
            value={state.message}
            onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))}
            className="min-h-28 w-full resize-y rounded-2xl border border-border bg-background/60 p-4 text-sm outline-none focus:ring-2 focus:ring-ring"
            placeholder="Example: Need Jaquar basin mixer + accessories for 2 bathrooms."
          />
        </Field>
      </div>

      {status.kind === "ok" ? (
        <div className="mt-4 rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm">
          <span className="font-semibold text-brand">Thanks.</span> {status.msg}
        </div>
      ) : null}

      {status.kind === "err" ? (
        <div className="mt-4 rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm">
          <span className="font-semibold">Error.</span> {status.msg}
        </div>
      ) : null}

      <div className="mt-4 text-xs text-muted-foreground">
        This form does not send data online. Use phone or WhatsApp to submit your
        inquiry.
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-1.5">
      <span className="text-xs font-semibold text-muted-foreground">{label}</span>
      {children}
      {error ? <span className="text-xs text-brand">{error}</span> : null}
    </label>
  );
}
