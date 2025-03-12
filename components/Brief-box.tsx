import { ComponentProps } from 'react';
import { tv } from 'tailwind-variants';

type BriefBoxProps = ComponentProps<'div'> & {
    value?: number;
    secondaryValue?: number;
    title: 'sales' | 'balance' | 'pending' | 'mission' | 'content';
    content?: string;
};

const briefBox = tv({
    base: 'flex flex-col w-full min-h-[100px] min-w-[242px] border border-[#D9D9D9] rounded-lg p-4',
});

export function BriefBoxComponent({ value, secondaryValue, title, ...props }: BriefBoxProps) {
    return (
        <div className={briefBox()} {...props}>
            {title === 'sales' && (
                <>
                    <div className="flex justify-between items-center">
                        <h3 className="font-bold text-base text-[#FFF]">Vendas</h3>
                        <span className="text-xs text-[#A9A9A9]">ontem</span>
                    </div>
                    <div className="flex justify-between items-center mt-5">
                        <span className="text-xl font-bold text-[#00FFF3]">R$ {value?.toFixed(2)}</span>
                        {secondaryValue !== undefined && (
                            <span className="text-xl font-bold text-[#FFF]">R$ {secondaryValue.toFixed(2)}</span>
                        )}
                    </div>
                </>
            )}

            {title === 'balance' && (
                <>
                    <h3 className="font-bold text-base text-[#FFF]">Saldo disponível</h3>
                    <span className="text-xl font-bold text-[#00FFF3] mt-5">R$ {value?.toFixed(2)}</span>
                </>
            )}

            {title === 'pending' && (
                <>
                    <h3 className="font-bold text-base text-[#FFF]">Pendente</h3>
                    <span className="text-xl font-bold text-[#00FFF3] mt-5">R$ {value?.toFixed(2)}</span>
                </>
            )}

            {title === 'mission' && (
                <>
                    <h3 className="font-bold text-base text-[#FFF]">Missão diária</h3>
                    <div className="flex justify-between items-center mt-5">
                        <span className="text-xl font-bold text-[#00FFF3]">{value} de {secondaryValue}</span>
                        <span className="text-sm text-[#FFF]">Concluído</span>
                    </div>
                </>
            )}

            {title === 'content' && (
                <>
                    <h3 className="font-bold text-base text-[#FFF]">Conteúdo</h3>
                </>
            )}
        </div>
    );
}
