import { createClient } from "@/utils/supabase/server";

export async function GET() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("Product").select("*");

  if (error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });

  return new Response(JSON.stringify(data), { status: 200 });
}

export async function POST(req: Request) {
  const supabase = await createClient();
  const body = await req.json();

  const { name } = body;

  const { data, error } = await supabase
    .from("Product")
    .insert({ name })
    .select();

  if (error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });

  return new Response(JSON.stringify(data[0]), { status: 201 });
}
