export default function TickIcon({stroke}) {
    return (
        <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
             fill="#000000">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier"><title></title>
                <g id="Complete">
                    <g id="tick">
                        <polyline fill="none" points="3.7 14.3 9.6 19 20.3 5" stroke={stroke || "000"}
                                  strokeLinecap="round"
                                  strokeLinejoin="round" strokeWidth="2"></polyline>
                    </g>
                </g>
            </g>
        </svg>
    )
}
