import { useGetLastWeekOrdersStatisticsQuery } from "@app/core/types"
import { Card, CardContent, Grid, Typography } from "@mui/material"
import { Loading } from "react-admin";
import { FinanceChart } from "../finance-chart/finance-chart.component"

export const DashBoard = () => {
  const {data, loading} = useGetLastWeekOrdersStatisticsQuery();

  if(loading) {
    return <Loading/>
  }

  return (
    <Card sx={{ marginTop: '64px' }}>
      <CardContent>
        <Typography variant="h5" sx={{ marginBottom: '32px' }}>Вітаємо в адмінці 🐟 FishStack</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" sx={{ marginBottom: '32px' }}>Останні нові замовлення</Typography>
                {/* <NewOrders /> */}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" sx={{ marginBottom: '32px' }}>
                  Продажі за останній тиждень
                </Typography>
                <FinanceChart data={data?.last_week_orders ?? []} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}