import { serve } from "https://deno.land/std/http/server.ts";
		serve(req => new Response("Hello World\n"));