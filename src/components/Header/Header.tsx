import { HeaderProps } from './headerType';
export const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <div className="Header">
            <h1 className="Header-title">{title}</h1>
        </div>
    );
};
