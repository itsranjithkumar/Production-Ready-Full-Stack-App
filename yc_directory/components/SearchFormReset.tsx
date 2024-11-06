"use client" 

import { Link } from 'lucide-react';
import React, { use } from 'react'

const SearchFormReset = () => {


    const reset = () => {
        const form = document.querySelector('.Search-form') as HTMLFormElement;
        
        if (form) form.react();
    }
  return (
    <button type="reset" onClick={reset}>

        <Link href="/" className= "search-btn text-white">
            <x className="size-5"/>
        </Link>

    </button>  )
}

export default SearchFormReset