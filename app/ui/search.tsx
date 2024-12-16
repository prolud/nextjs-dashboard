'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce'

interface SearchProps {
  placeholder: string
}
export default function Search({ placeholder }: SearchProps) {
  const searchParams = useSearchParams()
  const pathName = usePathname()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback(
    (search: string) => {
      const params = new URLSearchParams(searchParams)
      params.set('page', '1')
      if (search) {
        params.set('invoicesSearch', search)
      }
      else {
        params.delete('invoicesSearch')
      }

      replace(`${pathName}?${params.toString()}`)
    }, 500
  )

  return (
    <div className="relative flex flex-1 flex-shrink-0">

      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />

      <label htmlFor="search" className="sr-only">Search</label>

      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('invoicesSearch')?.toString()}
      />

    </div>
  );
}
