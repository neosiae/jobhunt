import * as S from './styles'

export default function Job({ job }) {
  return (
    <S.Container isFeatured={job.featured}>
      <S.FlexCenter>
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
      </S.FlexCenter>
    </S.Container>
  )
}
