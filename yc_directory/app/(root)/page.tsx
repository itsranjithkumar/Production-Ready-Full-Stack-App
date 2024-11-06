import { Search } from "lucide-react";
import SearchForm from "@/components/SearchForm";



export default function Home({
  searchParams,}:  {
    searchParams: Promise<{ query?: string}>
    
  }) {
    const query = {await searchParams}.query;
    return (
    <>
    <section className="pink_container">
    <h1 className = "heading">Pitch Your Starting,<br/> connect With Entrepreneurs</h1>

    <p className="sub-heading !max-w-3xl">
  Submit Ideas, Vote on Pitches, and Get Noticed in virtual Competitions.
</p>



              <SearchForm query={query} />


          <SearchForm />


    </section>
    </>
  );
}