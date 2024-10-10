import { Children, FC, PropsWithChildren, ReactElement } from 'react';

interface IIFProps {
    tif: boolean
    children: ReactElement[] | ReactElement | string | null
}

const If: FC<IIFProps> & { If: FC<PropsWithChildren<{}>>; Else: FC<PropsWithChildren<{}>> } = ({
    tif,
    children,
}) => {
    let ifChild = null;
    let elseChild = null;

    /* 如果没有children，则直接返回null */
    if (!children) return null;
    /* 如果children 不是数组，则直接按找 if 类型返回 */
    else if (!Array.isArray(children)) {
        return tif ? children : null;
    }

    /* 如果children 是数组，则遍历数组，找出 if 和 else 类型 */
    Children.forEach(children, child => {
        if (child.type === If.If) {
            ifChild = child;
        }
        if (child.type === If.Else) {
            elseChild = child;
        }
    });

    return tif ? ifChild : elseChild;
};

If.If = ({ children }: PropsWithChildren<{}>) => <>{children}</>;
If.Else = ({ children }: PropsWithChildren<{}>) => <>{children}</>;

export default If;