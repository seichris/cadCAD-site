type Props = {
  className?: string;
};

const Discord = ({ className = "my-6" }: Props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 64 64"
    fill="currentColor"
    className={`${className}`}
  >
    <path d="M37.922 26.852c-1.84 0-3.292 1.58-3.292 3.55s1.485 3.55 3.292 3.55c1.84 0 3.292-1.58 3.292-3.55s-1.485-3.55-3.292-3.55zm-11.78 0c-1.84 0-3.292 1.58-3.292 3.55s1.485 3.55 3.292 3.55c1.84 0 3.292-1.58 3.292-3.55.032-1.97-1.452-3.55-3.292-3.55zM53.608 0H10.36a6.63 6.63 0 0 0-6.616 6.616v43.248a6.63 6.63 0 0 0 6.616 6.616h36.6l-1.7-5.906 4.13 3.808 3.905 3.582L60.256 64V6.616C60.224 2.97 57.255 0 53.608 0zM41.15 41.795l-2.13-2.582c4.228-1.194 5.842-3.808 5.842-3.808-1.323.87-2.582 1.485-3.712 1.904-1.614.678-3.163 1.097-4.68 1.388-3.098.58-5.938.42-8.36-.032-1.84-.355-3.42-.84-4.744-1.388-.742-.3-1.55-.645-2.356-1.097-.097-.065-.194-.097-.3-.16-.065-.032-.097-.065-.13-.065l-.904-.55s1.55 2.55 5.648 3.776l-2.162 2.646c-7.133-.226-9.844-4.873-9.844-4.873 0-10.296 4.648-18.655 4.648-18.655 4.648-3.453 9.037-3.357 9.037-3.357l.323.387c-5.8 1.646-8.456 4.196-8.456 4.196s.7-.387 1.904-.904c3.453-1.517 6.197-1.904 7.326-2.033.194-.032.355-.065.55-.065a27.31 27.31 0 0 1 6.519-.065 26.86 26.86 0 0 1 9.715 3.066s-2.55-2.42-8.036-4.067l.452-.516s4.422-.097 9.037 3.357c0 0 4.648 8.36 4.648 18.655 0-.032-2.7 4.615-9.844 4.84z" />
  </svg>
);

export default Discord;
