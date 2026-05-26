
/*import { QueryClient, dehydrate } from "@tanstack/react-query";
import { getNoteItem } from "@/src/lib/api";
import NotesClient from "../Notes.client";
import { HydrationBoundary } from "@tanstack/react-query";

interface Props {
  params: Promise<{id: string}>
}

const NotesPage = async ({params}: Props) => {
  const { id } = await params
  const queryClient = new QueryClient();

  queryClient.prefetchQuery({
    queryKey: ["notes", id], 
    queryFn: () => getNoteItem(id),
  });

  return (
    <div> 
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient />
    </HydrationBoundary>
    </div>
  );
}

export default NotesPage
*/