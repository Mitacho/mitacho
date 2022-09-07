interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {}

function ListItem({ children }: ListItemProps) {
  return <li className="">{children}</li>;
}

interface SocialsProps extends React.HTMLAttributes<HTMLElement> {}

export function Socials({ className, ...props }: SocialsProps) {
  return (
    <aside
      className={`flex items-center justify-end text-xs relative ${className}`}
    >
      <nav className="absolute right-4 writing-v-lr">
        <ul className="-rotate-180 origin-right flex flex-row gap-10">
          <ListItem>
            <a
              href="https://www.linkedin.com/in/arthurflv/"
              rel="noopener noreferrer"
              target="_blank"
              title="meu linkedin"
            >
              linkedin
            </a>
          </ListItem>
          <ListItem>
            <a
              href="https://twitter.com/Mitacho_"
              rel="noopener noreferrer"
              target="_blank"
              title="meu twitter"
            >
              twitter
            </a>
          </ListItem>
        </ul>
      </nav>
    </aside>
  );
}
