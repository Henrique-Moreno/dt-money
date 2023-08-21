import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";
import { SummeryContainer, SummaryCard } from "./styles";
import { priceFormatter } from "../../utils/formatter";
import { useSummary } from "../../hooks/useSummary";

export default function Summary() {

  const summary = useSummary();

  return (
    <SummeryContainer>
      <SummaryCard>
        <header>
          <span>Entrada</span>
          <ArrowCircleUp
            size={32}
            color="#00b37e"
          />
        </header>

        <strong>{priceFormatter.format(summary.incone)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown
            size={32}
            color="#f75a68"
          />
        </header>

        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard varient="green">
        <header>
          <span>Total</span>
          <CurrencyDollar
            size={32}
            color="#fff"
          />
        </header>

        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>

    </SummeryContainer>
  )
}
