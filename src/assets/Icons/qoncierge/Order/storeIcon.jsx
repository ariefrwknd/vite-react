export const StoreIcon = ({ props, width, height }) => {
	return (
		<svg
			width={`${width ? width : "24"}`}
			height={`${height ? height : "24"}`}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M5.25 9.75C5.25 10.578 4.578 11.25 3.75 11.25C2.922 11.25 2.25 10.578 2.25 9.75C2.25 9.375 3.75 7.3125 3.75 7.3125V5.25C3.75 4.422 4.422 3.75 5.25 3.75H17.25C18.078 3.75 18.75 4.422 18.75 5.25V7.3125C18.75 7.3125 20.25 9.375 20.25 9.75C20.25 10.578 19.578 11.25 18.75 11.25C17.922 11.25 17.25 10.578 17.25 9.75"
				stroke="#333333"
				strokeMiterlimit="10"
			/>
			<path
				d="M8.25 9.75C8.25 10.578 7.578 11.25 6.75 11.25C5.922 11.25 5.25 10.578 5.25 9.75"
				stroke="#333333"
				strokeMiterlimit="10"
			/>
			<path
				d="M11.25 9.75C11.25 10.578 10.578 11.25 9.75 11.25C8.922 11.25 8.25 10.578 8.25 9.75"
				stroke="#333333"
				strokeMiterlimit="10"
			/>
			<path
				d="M14.25 9.75C14.25 10.578 13.578 11.25 12.75 11.25C11.922 11.25 11.25 10.578 11.25 9.75"
				stroke="#333333"
				strokeMiterlimit="10"
			/>
			<path
				d="M17.25 9.75C17.25 10.578 16.578 11.25 15.75 11.25C14.922 11.25 14.25 10.578 14.25 9.75"
				stroke="#333333"
				strokeMiterlimit="10"
			/>
			<path d="M5.25 9V10.5" stroke="#333333" strokeMiterlimit="10" />
			<path d="M8.25 9V10.5" stroke="#333333" strokeMiterlimit="10" />
			<path d="M11.25 9V10.5" stroke="#333333" strokeMiterlimit="10" />
			<path d="M14.25 9V10.5" stroke="#333333" strokeMiterlimit="10" />
			<path d="M17.25 9V10.5" stroke="#333333" strokeMiterlimit="10" />
			<path
				d="M18.75 11.0625V20.25H15.75V14.25H12.75V20.25H3.75V11.0625"
				stroke="#333333"
				strokeMiterlimit="10"
			/>
			<path
				d="M9.75 14.25H6.75V17.25H9.75V14.25Z"
				stroke="#333333"
				strokeMiterlimit="10"
			/>
			<path d="M3.75 6.75H18.75" stroke="#333333" strokeMiterlimit="10" />
		</svg>
	);
};

export default StoreIcon;
