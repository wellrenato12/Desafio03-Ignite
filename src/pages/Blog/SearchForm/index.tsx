import { useForm } from 'react-hook-form'
import { SearchFormContainer } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

interface SearchFormProps {
  getIssuesPost: (query: string) => Promise<void>
  postLength: number
}

const SearchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof SearchFormSchema>

export function SearchForm({ getIssuesPost, postLength }: SearchFormProps) {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(SearchFormSchema),
  })

  function handleSearch(data: SearchFormInput) {
    getIssuesPost(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearch)}>
      <div>
        <strong>Publicações</strong>
        <p>{postLength} publicações</p>
      </div>
      <form action="">
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
      </form>
    </SearchFormContainer>
  )
}
