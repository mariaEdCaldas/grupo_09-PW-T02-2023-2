import "./PageContainer.scss"

interface PageContainerProps {
    children: React.ReactNode;
}

export default function PageContainer(props: PageContainerProps) {
    return (
        <div className="page-container">
            {props.children}
        </div>
    )
}
