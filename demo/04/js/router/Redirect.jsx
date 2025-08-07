import { useEffect } from '@/react';
import { navigate } from '@/router/index';

export default function Link ({ to }) {
    useEffect(() => {
        navigate(to);
    }, []);

    return null;
}
