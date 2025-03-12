import { ComponentProps } from 'react';
import { tv } from 'tailwind-variants';
import { useTheme } from '../context/ThemeContext';

type BriefBoxProps = ComponentProps<'div'> & {
    value?: number;
    secondaryValue?: number;
    title: 'sales' | 'balance' | 'pending' | 'mission' | 'content';
    content?: string;
};

const briefBox = tv({
    base: 'flex flex-col w-full min-h-[100px] min-w-[242px] border border-[#818181] rounded-lg p-4',
});

export function BriefBoxComponent({ value, secondaryValue, title, ...props }: BriefBoxProps) {
    const { theme } = useTheme();

    return (
        <div className={briefBox()} {...props}>
            {title === 'sales' && (
                <>
                    <div className={`flex justify-between items-center ${theme === 'dark' ? 'text-[#FFF]' : 'text-[#6C6C6C]'}`}>
                        <h3 className="font-bold text-base">Vendas</h3>
                        <span className="text-xs text-[#A9A9A9]">ontem</span>
                    </div>
                    <div className="flex justify-between items-center mt-5">
                        <span className={`text-xl font-bold ${theme === 'dark' ? 'text-[#00FFF3]' : 'text-[#11CEC5]'}`}>R$ {value?.toFixed(2)}</span>
                        {secondaryValue !== undefined && (
                            <span className="text-base font-bold">R$ {secondaryValue.toFixed(2)}</span>
                        )}
                    </div>
                </>
            )}

            {title === 'balance' && (
                <>
                    <h3 className={`font-bold text-base ${theme === 'dark' ? 'text-[#FFF]' : 'text-[#6C6C6C]'}`}>Saldo disponível</h3>
                    <span className={`mt-5 text-xl font-bold ${theme === 'dark' ? 'text-[#00FFF3]' : 'text-[#11CEC5]'}`}>R$ {value?.toFixed(2)}</span>
                </>
            )}

            {title === 'pending' && (
                <>
                    <h3 className={`font-bold text-base ${theme === 'dark' ? 'text-[#FFF]' : 'text-[#6C6C6C]'}`}>Pendente</h3>
                    <span className={`mt-5 text-xl font-bold ${theme === 'dark' ? 'text-[#00FFF3]' : 'text-[#11CEC5]'}`}>R$ {value?.toFixed(2)}</span>
                </>
            )}

            {title === 'mission' && (
                <>
                    <h3 className={`font-bold text-base ${theme === 'dark' ? 'text-[#FFF]' : 'text-[#6C6C6C]'}`}>Missão diária</h3>
                    <div className="flex justify-between items-center mt-5">
                        <span className={`text-xl font-bold ${theme === 'dark' ? 'text-[#00FFF3]' : 'text-[#11CEC5]'}`}>{value} de {secondaryValue}</span>
                        <span className={`text-sm ${theme === 'dark' ? 'text-[#FFF]' : 'text-[#6C6C6C]'}`}>Concluído</span>
                    </div>
                </>
            )}
        </div>
    );
}
