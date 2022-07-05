interface Props {
  amount: number;
  activeTooltip: boolean;
}

const Tooltip = ({ amount, activeTooltip }: Props) => {
  if (activeTooltip) {
    return (
      <span
        className={`absolute rounded-md bg-dark-brown text-xs text-very-pale-orange px-2 py-1 p top-[-30px] left-[-6px]`}
      >
        ${amount}
      </span>
    );
  }
  return <></>;
};

export default Tooltip;
