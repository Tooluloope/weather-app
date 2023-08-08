import { useEffect, useState } from "react";
type Props = {
	children?: React.ReactNode;
};
const HydrationZustand: React.FC<Props> = ({ children }) => {
	const [isHydrated, setIsHydrated] = useState(false);

	// This is a hack to make sure that the store is hydrated before rendering the app
	useEffect(() => {
		setIsHydrated(true);
	}, []);

	return <>{isHydrated ? <div>{children}</div> : null}</>;
};

export default HydrationZustand;
