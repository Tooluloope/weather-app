import { useRef, useCallback } from "react";

export const useFocus = () => {
	const ref = useRef<HTMLInputElement | null>(null);
	const focus = useCallback(() => {
		ref.current?.focus();
	}, []);

	return { focus, ref };
};
