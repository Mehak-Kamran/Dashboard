import { Box, Stack } from "@mui/material";
// Import necessary libraries
import { Chart as ChartJS, defaults } from "chart.js/auto";
import revenueData from "./data/revenue.json";
import sourceData from "./data/source.json";
import { Bar, Doughnut, Line } from "react-chartjs-2";

function App() {
  return (
    <>
    <h1 style={{margin:"10px"}}>Charts in React</h1>
      <Stack
        direction={"row"} spacing={2}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center"
          ,margin:"140px",marginTop:"50px",marginBottom:"20px"}}
        
      >
        
        <item>
        <Box
          sx={{
            width: "500px",
            height: "270px",
            backgroundColor: "beige",
            
          }}
        >
          <Doughnut
            data={{
              labels: revenueData.map((data) => data.label),
              datasets: [
                {
                  label: "Revenue",
                  data: revenueData.map((data) => data.value),
                  backgroundColor: [
                    "rgba(43, 63, 229, 0.8)",
                    "rgba(250, 192, 19, 0.8)",
                    "rgba(253, 135, 135, 0.8)",
                  ],
                  borderRadius: 5,
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
        </Box>
        </item>
        
       <item>
       <Box
          sx={{
            width: "500px",
            height: "270px",
            backgroundColor: "beige",
            
          }}
        >
          <Bar
            data={{
              labels: revenueData.map((data) => data.label),
              datasets: [
                {
                  label: "Revenue",
                  data: revenueData.map((data) => data.value),
                  backgroundColor: [
                    "rgba(43, 63, 229, 0.8)",
                    "rgba(250, 192, 19, 0.8)",
                    "rgba(253, 135, 135, 0.8)",
                  ],
                  borderRadius: 5,
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
        </Box>
       </item>
        
      </Stack>

      <Stack sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
        <item>
        <Box
          sx={{
            width: "600px",
            height: "270px",
            backgroundColor: "beige",
            
          }}
        >
          <Line
            data={{
              labels: sourceData.map((data) => data.label),
              datasets: [
                {
                  label: "Cost",
                  data: sourceData.map((data) => data.cost),
                  backgroundColor: [
                    "rgba(43, 63, 229, 0.8)",
                    
                  ],
                  borderRadius: 5,
                },
                {
                  label: "Revenue",
                  data: sourceData.map((data) => data.revenue),
                  backgroundColor: [
                    
                    "rgba(253, 135, 135, 0.8)",
                  ],
                  borderRadius: 5,
                }
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
        </Box>
        </item>
      </Stack>
    </>
  );
}

export default App;
