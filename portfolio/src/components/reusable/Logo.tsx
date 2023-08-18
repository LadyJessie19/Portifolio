interface IProps {
  img:any
}

const Logo = ({img}:IProps) => {
  return (
    <>
      <img src={img} alt="logo" />
    </>
  )
}

export default Logo