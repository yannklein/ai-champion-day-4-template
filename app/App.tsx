import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <main className="mx-auto max-w-xl px-4 py-12 leading-relaxed">
      <h1 className="text-3xl font-bold">SnapClaim</h1>
      <p className="mt-4 text-muted-foreground">
        Nothing is built yet, which is the point. Exercise 2 defines the data
        layer, Exercise 3 builds the screens, and both of them read{" "}
        <code>docs/build-brief.md</code> rather than this file.
      </p>
      <p className="mt-4 text-muted-foreground">
        The button below is a shadcn/ui component in the default theme.
        Exercise 1 swaps the theme for the one you pick on shadcn/create.
      </p>
      <Button className="mt-6">A shadcn/ui button</Button>
    </main>
  );
}
