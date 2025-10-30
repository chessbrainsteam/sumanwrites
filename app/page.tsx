// app/page.tsx
import { redirect } from "next/navigation";

export default function Home() {
  // “Dashboard should load the blog menu automatically”
  // → make / the blog landing
  redirect("/about");
}
