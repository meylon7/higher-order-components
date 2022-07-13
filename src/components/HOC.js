import React,{useEffect,useState} from "react";

const HOC = (Wrapper, entity) => {
  return class extends React.Component {
    state = {
      data: [],
      term: "",
    };
    componentDidMount() {
      const fetchData = async () => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/${entity}`
        );
        const data = await res.json();
        this.setState({ ...this.state, data: data });
      };
      fetchData();
    }
    render() {
      let { term, data } = this.state;
      let filteredData = data.slice(0, 10).filter((d) => {
        if (entity === "users") {
          const { name } = d;
          return name.indexOf(term) >= 0;
        }
        if (entity === "todos") {
          const { title } = d;
          return title.indexOf(term) >= 0;
        }
      });
      return (
        <div>
          <h2 className="title">{entity}</h2>
          <input
            type="text"
            className="text-input"
            value={term}
            onChange={(e) =>
              this.setState({ ...this.state, term: e.target.value })
            }
          />
          <Wrapper data={filteredData}></Wrapper>
        </div>
      );
    }
  };
};

export default HOC;