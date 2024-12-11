import React from "react";
import { useParams } from "react-router-dom"
import Skeleton from "../components/Skeleton";
interface CatDetailProps{
    id: string
}
interface CatDetailState{
    cat: any,
    loading: boolean
}
class CatDetail extends React.Component<CatDetailProps, CatDetailState> {
    constructor(props: any){
        super(props)
        this.state={
            cat:{},
            loading: false
        }
    }

    componentDidMount(): void {
        this.setState({loading: true})
        const id = parseInt(this.props.id)
        fetch(`http://localhost:5000/cat/${id}`)
        .then((result) => result.json())
        .then((data) => this.setState({cat: data, loading: false}))
        .catch((err) => { console.log(err.message);
            this.setState({loading: false})
        })
    }

    render() {
        if(this.state.loading){
            return <Skeleton count={1} />
        }
        return <div>
        DetailCat: {this.state.cat.title} </div>;
    }
}

const CatDetailWrapper = () => {
    const { id: paramsId } = useParams<{id: string}>();
    //console.log(paramsId)
    if(!paramsId){
        return <div>Hata</div>
    }

    return <CatDetail id={paramsId} />
}

export default CatDetailWrapper