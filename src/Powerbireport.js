
import './App.css';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

function Test() {
  return (
    <div className="App">
      <h1>Power Bi Report</h1>
	  <div style={{height:'550px'}}>
	  <PowerBIEmbed 
  scroll="no"
  cssClassName={"power_bi_container"}
  embedConfig={{
    type: "report", //Supported types: report, dashboard, tile, visual and qna
    id: "9041cc30-4be8-4ea4-a013-a164d84906e0",
    accessToken: "H4sIAAAAAAAEAB3Tt66lBgBF0X95LZbIydIU5JwzHVxyzhew_O-ecb-rdXT--bGzZ5iz4ufvn3EWiAq2h4z02YZqHxMVCgCXFRQSWHEVGbPgNyZy9LsssAIJi3egowYCceY2eEB2XgPT1crhsCIdPL2InebA-RKiNE5SujTKSANBrEiPhBwORWYLXFLH18eWj0Plx69mz64Ibn7G-o-n5aes1ExObHLM0rDes4f3Gr1izeW5G2KY6iOXNA1wblPjfA2Q65YhvogV--hQyXYD6aCmgov8hDafQOb8w644B0WWwUN4AEvXDe3Nweq6hWef-ryC2tDQCSVSm5kf-ckGnzpo4Hs5w94HA-17Ut2_CTl46lqVvmYQhYkuxsXtRhl609dQXXsmrKwc1EiXMe8EzHSqHnjNO4sZ6Hmq94sGNto8H7HTt2aKV6-vNDV0GcSQi-GML9Q3E0BAeLqNkMAAQ1Cc8OT-9nfQcYgAF5aUfiqCanSJhXYyHU3OikDaWK88B03Wx5J3mE1QOVNxudCuiGxJVsYgdl9D8xpZN3nN2ewXbas2GO11xc2cd5wiwUDy1cVXTYJNTW1-PNDlaVK-2QRfDk0JVdeinAOEFlwpWzXrS1CCc5CyZUy7DZnskmiC6PfrhlzEBvDTtxN6xnh482zgaU-T-J3I4hZMSMrVLDBv4qlY4khg1t-esbt22k-0JzAdN04TZBg_cAUrp9vTOGS54qDPH_PE2dVCL7zJ7yfrgfjMMGyZ1_pdsgY_ukp5D4SA2xbKXoRlAC5Pewq9yFAp4mA_7NWEjUV3zNYjUs6GUomEnwHZdX1ndFU379eYcLlb6o-XCQ6pVzC6jqUSblgn4mHYSTZva9R6ElfCtZBfYAS53to999pKZCWEFnQcGCZwnC1K4yb889cPtz3LMWvl8_tOMhB06jnad0jEZcLgX_6QvObjfxWltbNo7Lz4tHlX0h8WBkn45G1_1SEqFjuJdOewJ0IM4dHG8uqrF6j7rdfRTunufP2O7RLPMwNUFiMTH7LmjDI6X3SQCDBg_YpXnF72lEBnCY3G5YVkjOjXO7x4OASAskcxVxAC5dDwiYJlG1fDfbaAw5tL1Xtt3juVsI37xAUx_7B2HGh2yxQTOM0SUwFNd7Dah9dLTvEFfm3Fu4kbAA_Pbx0YUyTlumA1aHALQ1Q5223CaUrOCDzEq0joCIXAYldgVcSGbWIWzKZcWAfqGNXvPaPqrTaFDAUEp1yha1um_oRXpAeOeHhQyMeb2I359esP87M05aaEv5XDmnnNAxzz1dp5hJ2_R2PVzv-V19ZTdpxb-Ts7NkltwiKzHZ6tr7fGGVwydy1g4o8NBv7VbKx8DHMuinSAuJvFIR6PBFbB-nfADLg4XHmSo-WUCZhNmfTK60OLc6o1ieCTZHR77J_VShXRvW5w701ZqBkYdc4qwU90iwP-6vBxVSANu7yGCfItMM7h2W9fdtwWRuTkjLcAbGNkuNR4RrnqMBKdjd5lxVl253g81l5g5j9TubnCTU8S0b_xV2w7l3rnsvqNJmaJgqnA7kH79ZVziSI-vsovOltLivOFExUTpLBwjUC-0yzN0C_DcP1oPaoa2Ro8MtG7sa3sTUhvW4JzRw3Wh3A0LMMYqfd6i4yykaiGaWKpkuLBQ5KRLn_G-Pc_cSpFS0IGAAA=.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUlORElBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZXhwIjoxNjc2MTM2MDAwLCJhbGxvd0FjY2Vzc092ZXJQdWJsaWNJbnRlcm5ldCI6dHJ1ZX0=",

    tokenType: models.TokenType.Embed,
    filters: [
      {
        $schema: "https://app.powerbi.com/groups/b9001cc0-1075-4eaf-a1f6-be82145704a3/reports/9041cc30-4be8-4ea4-a013-a164d84906e0/ReportSection",
        target: { table: "", //table name
				column: "", //table column name for filter
				},
        operator: "eq", //eq, in etc
        values: [], //array of values eg. [493]
        requireSingleSelection: true,
      },
    ],

    settings: {
      panes: {
        filters: {
          expanded: false,
          visible: false,
        },
      },
      background: models.BackgroundType.Transparent,
      layoutType: models.LayoutType.Custom,
      customLayout: {
        displayOption: models.DisplayOption.ActualSize,
      },
    },
  }}
/>
	  </div>
    </div>
  );
}

export default Test;
