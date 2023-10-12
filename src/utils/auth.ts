import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export function AuthCheck() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(
        () => {
            if (status === "loading") {
                return;
            }

            if (!session) {
                router.replace("/auth/login");
            }
        }, [session, status, router]
    );

    return session;
}