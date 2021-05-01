type Props = {
  className?: string;
};

const Youtube = ({ className = "my-6" }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={`${className}`}
  >
    <path
      d="M23.4761 6.2235C23.3381 5.71447 23.0692 5.25043 22.6963 4.87749C22.3233 4.50455 21.8593 4.23569 21.3502 4.09762C19.4865 3.58875 11.985 3.58875 11.985 3.58875C11.985 3.58875 4.48313 3.60375 2.619 4.11262C2.10997 4.25069 1.64594 4.51955 1.27299 4.89249C0.900053 5.26543 0.631192 5.72947 0.493125 6.2385C0 8.10262 0 12 0 12C0 12 0 15.8974 0.5085 17.7765C0.646567 18.2855 0.915428 18.7496 1.28837 19.1225C1.66131 19.4954 2.12535 19.7643 2.63438 19.9024C4.49812 20.4112 12 20.4112 12 20.4112C12 20.4112 19.5019 20.4112 21.366 19.9027C21.875 19.7647 22.3391 19.4958 22.712 19.1229C23.0849 18.7499 23.3538 18.2859 23.4919 17.7769C24 15.9127 24 12 24 12C24 12 23.985 8.10262 23.4761 6.2235Z"
      fill="currentColor"
    />
    <path
      d="M9.59705 15.6045L15.8202 12L9.59668 8.39551L9.59705 15.6045Z"
      fill="cadcad-blue"
    />
  </svg>
);

export default Youtube;