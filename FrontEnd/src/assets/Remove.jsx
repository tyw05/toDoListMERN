import PropTypes from 'prop-types'

const Remove = ({ removeTask }) => {
    return (
        <svg
            className="hover:fill-yellow-500 inline-block h-16 w-8 py-4 p-1 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            onClick={removeTask}
        >
            <g data-name="Layer 2">
                <g data-name="remove">
                    <rect width="24" height="24" opacity="0" />
                    <path d="M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4zM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8h12z" />
                    <path d="M9 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z" />
                    <path d="M15 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z" />
                </g>
            </g>
        </svg>
    );
};

Remove.propTypes = {
    removeTask: PropTypes.func
}

export default Remove