import clsx from "clsx";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export const Container = (props: ContainerProps) => {
    return (
        <main className={clsx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", props.className)}>
            <div className="mx-auto max-w-7xl">{props.children}</div>
        </main>
    );
};