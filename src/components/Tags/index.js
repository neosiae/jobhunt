import Tag from '../Tag'
import * as S from './styles'

export default function Tags({ tags }) {
  return (
    <S.Container>
      {tags.map((tag, index) => {
        const name = tag[Object.keys(tag)[0]]
        return <Tag key={index} name={name} query={tag} />
      })}
    </S.Container>
  )
}
