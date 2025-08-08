import { navigate } from '@/router/index';

export default function Link ({ href, children, ...rest }) {
    return (
        <a href={href}
           onClick={(e) => {
               e.stopPropagation();
               e.preventDefault();
               navigate(href);
           }} {...rest}>{children}</a>
    );
}
