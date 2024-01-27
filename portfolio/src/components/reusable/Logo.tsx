interface IProps {
  img: any;
}

const Logo = ({ img }: IProps) => {
  return (
    <>
      <span>
        <img width={100} src={img} alt="logo" />
      </span>
    </>
  );
};

export default Logo;
