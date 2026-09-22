import { supabase } from "@/lib/supabase";

export default async function TestSupabase() {
  const { data, error } = await supabase
    .from("rooms")
    .select("*");

  console.log("DATA:", data);
  console.log("ERROR:", error);

  return (
    <div>
      <h1>Supabase Test</h1>

      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>

      {error && (
        <pre>
          {JSON.stringify(error, null, 2)}
        </pre>
      )}
    </div>
  );
}