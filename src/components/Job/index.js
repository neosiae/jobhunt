import Tags from './../Tags'
import * as S from './styles'

function getTags(job) {
  const tags = []
  const keys = ['role', 'level', 'languages', 'tools']

  keys.forEach((key) => {
    if (Array.isArray(job[key])) {
      job[key].forEach((value) => {
        tags.push({
          [key]: value,
        })
      })
    } else {
      tags.push({ [key]: job[key] })
    }
  })

  return tags
}

export default function Job({ job }) {
  const tags = getTags(job)

  return (
    <S.Container isFeatured={job.featured}>
      <S.FlexCenter>
        <S.FlexCenterFullWidth>
          <S.LogoWrapper>
            <S.Logo
              alt={job.company}
              src={`${process.env.PUBLIC_URL}/${job.logo}`}
            />
          </S.LogoWrapper>
          <S.InfoWrapper>
            <S.CompanyWrapper>
              <S.Company>{job.company}</S.Company>
              {job.new ? <S.New>NEW!</S.New> : null}
              {job.featured ? <S.Featured>FEATURED</S.Featured> : null}
              <S.Position>{job.position}</S.Position>
              <S.MetaInfo>
                {job.postedAt} <S.Dot>&middot;</S.Dot>
                {job.contract} <S.Dot>&middot;</S.Dot>
                {job.location}
              </S.MetaInfo>
            </S.CompanyWrapper>
          </S.InfoWrapper>
        </S.FlexCenterFullWidth>
        <Tags tags={tags} />
      </S.FlexCenter>
    </S.Container>
  )
}
