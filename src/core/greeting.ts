import { match, P } from "ts-pattern"

export type GreetingVariant =
  | { readonly kind: "effect" }
  | { readonly kind: "named"; readonly name: string }

/**
 * Formats a greeting message without side effects.
 *
 * @param variant - Non-empty, classified name information.
 * @returns Greeting text composed deterministically.
 *
 * @pure true
 * @invariant variant.kind === "named" ⇒ variant.name.length > 0
 * @complexity O(1) time / O(1) space
 */
export const formatGreeting = (variant: GreetingVariant): string =>
  match(variant)
    .with({ kind: "effect" }, () => "Hello from Effect!")
    .with({ kind: "named", name: P.select() }, (name) => `Hello, ${name}!`)
    .exhaustive()
