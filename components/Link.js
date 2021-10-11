import NextLink from 'next/link';
import Button from './Button';

export default function Link({
  ariaLabel = 'Link',
  href,
  className,
  children,
  external,
  scroll = true
}) {
  return (
    <>
      {href && (
        <NextLink href={href} aria-label={ariaLabel} scroll={scroll}>
          <a className={className} target={external ? '_blank' : ''}>
            {children}
          </a>
        </NextLink>
      )}
      {!href && (
        <Button disabled={true} aria-label={ariaLabel} className={className}>
          {children}
        </Button>
      )}
    </>
  );
}
