

var CheckMark = ({
    side=30,
    fill="white",
    ...props
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={`${side}px`} height={`${side}px`}
            viewBox="0 0 36 36"
            aria-hidden="true" role="img"
            preserveAspectRatio="xMidYMid meet"
            {...props}
        >
            <path
                fill={fill}
                d="M34.459 1.375a2.999 2.999 0 0 0-4.149.884L13.5 28.17l-8.198-7.58a2.999 2.999 0 1 0-4.073 4.405l10.764 9.952s.309.266.452.359a2.999 2.999 0 0 0 4.15-.884L35.343 5.524a2.999 2.999 0 0 0-.884-4.149z"
            />
        </svg>
    )
}

export default CheckMark;
