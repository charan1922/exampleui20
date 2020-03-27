import React from 'react';
import MaterialTable from 'material-table';
import {
  CallSplit as CallSplitIcon,
  Launch as LaunchIcon,
} from "@material-ui/icons";

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Id', field: 'id' },
      { title: 'Name', field: 'name' },
      { title: 'Version', field: 'version', type: 'numeric' },
      { title: 'Validate', field: 'validate', render: icon => icon.validate ? <i class="material-icons">arrow_upward</i> : <i class="material-icons">arrow_downward</i> },
      { title: 'Last modified date', field: 'lastModifiedDate', type: 'datetime' },
      { title: 'Jobs', field: 'jobs' },
      { title: 'Description', field: 'desc' },
    ],
    data: [
      { id: '5cd9307025f4f0572995990f', name: 'Hunt Valdez', version: 1.2, validate: true, lastModifiedDate: '2017-06-02T11:22', jobs: 'AnovaGPAR', desc: 'lorem ipsum covid-19' },
      { id: '5cd9307025f4f0572995990k', name: 'Jack Valdez', version: 1.0, validate: false, lastModifiedDate: '2018-04-02T11:22', jobs: 'VIBGYOR', desc: 'ipsum covid-19' },

    ],
  });

  return (
    <MaterialTable
      title="Scenario Details"
      columns={state.columns}
      data={state.data}

      options={{
        selection: true
      }}

      onSelectionChange={(rows) => alert('You selected ' + rows.length + ' rows')}

      editable={{

        // onRowAdd: newData =>
        //   new Promise(resolve => {
        //     setTimeout(() => {
        //       resolve();
        //       setState(prevState => {
        //         const data = [...prevState.data];
        //         data.push(newData);
        //         return { ...prevState, data };
        //       });
        //     }, 600);
        //   }),


        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
