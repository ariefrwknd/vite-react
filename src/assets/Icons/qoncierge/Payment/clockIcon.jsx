export const ClockIcon = (props) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M11.25 20.25C16.2206 20.25 20.25 16.2206 20.25 11.25C20.25 6.27944 16.2206 2.25 11.25 2.25C6.27944 2.25 2.25 6.27944 2.25 11.25C2.25 16.2206 6.27944 20.25 11.25 20.25Z"
				stroke="#333333"
				strokeMiterlimit="10"
			/>
			<path d="M11.25 4.5V11.25H15" stroke="#333333" strokeMiterlimit="10" />
		</svg>
	);
};

export default ClockIcon;
