import {reduxForm,Field} from 'redux-form'
import { connect } from "react-redux"
import React,{ Component } from "react";
import '../Styles/ventana-principal.css';
import ventanaPrincipalComponent from './input-component/ventanaPrincipal-input';
import {reset} from 'redux-form';
import VentanaFTE from './ventana-fte'
import VentanaCostosExtras from './ventana-costosExtras'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleXmark,faPlusCircle, faUsers, faStopwatch, faMoneyBillWave, faRobot} from "@fortawesome/free-solid-svg-icons"

const validate= values=> {
    const errors= {};
    if(!values.nPersonas){
        errors.nPersonas = "Campo Obligatorio"
    }
    if(!values.salarioPromedio){
        errors.salarioPromedio = "Campo Obligatorio"
    }
    if(!values.costoImplementacion){
        errors.costoImplementacion = "Campo Obligatorio"
    }
    if(!values.FTE){
        errors.FTE = "Campo Obligatorio"
    }
    if(!values.nOperaciones){
        errors.nOperaciones = "Campo Obligatorio"
    }
    if(!values.nHorasXDia){
        errors.nHorasXDia = "Campo Obligatorio"
    }
    if(!values.diasLaborables){
        errors.diasLaborables = "Campo Obligatorio"
    }
    if(!values.tiempoXOperacion){
        errors.tiempoXOperacion = "Campo Obligatorio"
    }
    if(!values.rendimiento){
        errors.rendimiento = "Campo Obligatorio"
    }
    return errors
}

const CSS = {
    principalBox:{
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "rgba(0,0,0,0.2)",
        width: "100%",
        height: "100vh",

        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    formCostosROI: {
        maxWidth: 350,
        margin: "0 10px",
        width: "100%",
        position: "relative",
        padding: "20px 30px",
        backgroundColor: "white",
        borderRadius: 15,
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    },
    inputs:{
        display : "flex",
        width: "100%",
        boxSizing: "border-box",
        paddingLeft: 7,
        borderStyle: "none",
        boxShadow: "rgba(0,0,0, 0.35) 0px 1px 4px",
    },
    inputStyle:{
        height: 23,
        fontSize: 16
    },
    btnGeneral:{
      cursor: "pointer",  
      padding: "5px 13px",
      borderRadius: 15,
      border: "none"
    },
    btnCerrar:{
        position: "absolute",
        cursor: "pointer",  
        right: 6,
        top: 6,
        fontSize: 20,
        color: "#D60718"
    },
    btnRegistrar:{
        height: 27,
        backgroundColor: "#00C922",
        color: "white",
    },
    btnAgregarCostos:{
        backgroundColor: "#43CA40",
        height: "32px",
        fontSize: 16,
        color: "white",
        display: "flex",
        alignItems: "center"
    },
    porcentajeBox:{
        display:"grid",
        gridTemplateColumns:"80px 1fr", 
        gridGap: 8
    },
    porcentajeFTE:{
        backgroundColor: "#7A64FF", 
        color:"white", 
        width:"100%",
        boxSizing: "border-box", 
        paddingLeft: 7, 
        margin: 0, 
        padding: "0px 5px",
        textAlign: "center"
    },
    inputBoxes : {
        margin: "20px 0",
    },
    iconStyle: {
        marginRight: 7
    }
}

class VentanaPrincipal extends Component{
    constructor(props){
        super(props);
        this.state = {
            popUp: false,
            popUp2: false,
        }
    }
    
    render(){
        const botonCerrar = () =>{
            setTrigger(false)
            dispatch(reset('v_principal'))
        }
        const abrirFTE = () =>{
            this.setState(state=>({
                popUp: !state.popUp
            }))
        }
        
        const abrirCostosExtras = () =>{
            this.setState(state=>({
                popUp2: !state.popUp2
            }))
        }

        const {trigger
                ,setTrigger
                ,handleSubmit
                ,dispatch
                ,pristine
                ,submitting
                ,FTEvalue
                ,index
            } = this.props
        const {popUp, popUp2} = this.state
        /* Inicializar valores */       


        const ventanaPrincipal = ()=>{
            /* EXTRAYENDO los valores de la clase FTE */
            let nOpDiarias = FTEvalue.FTE.nOpDiarias,
            hTrabajadasXDia =  FTEvalue.FTE.hTrabajadasXDia,
            dLaborablesXSemana = FTEvalue.FTE.dLaborablesXSemana,
            tXOperacionMinutos = FTEvalue.FTE.tXOperacionMinutos,
            rateEmpleado = FTEvalue.FTE.rateEmpleado
            
            rateEmpleado = (rateEmpleado*0.022)+0.68
            
            let FTEresultado = (nOpDiarias*dLaborablesXSemana*4*tXOperacionMinutos)/(hTrabajadasXDia*dLaborablesXSemana*60*4*rateEmpleado)
            FTEresultado = (FTEresultado*100).toFixed(2)
            
            if(isNaN(FTEresultado)){
                FTEresultado = 0
            }
            return (
                <div style={CSS.formCostosROI}>
                    {/* BOTONCERRAR */}
                    <div style={{marginBottom: 10}}>
                        <FontAwesomeIcon style={CSS.btnCerrar} onClick={()=>botonCerrar()} icon={faCircleXmark} />
                    </div>
                    {/* NPERSONAS */}
                    <div style={CSS.inputBoxes}>
                    <Field style={{...CSS.inputs, ...CSS.inputStyle}} icono={faUsers} iconoEstilo={{...CSS.iconStyle, color: "#FC4D19"}} name="nPersonas" type="number" component={ventanaPrincipalComponent} placeholder="0"
                    title="¿Cuántas personas están actualmente trabajando en esta actividad?" />
                    </div>
                    {/* FTE */}
                    <div style={{...CSS.inputBoxes, backgroundColor: "#5F0DFC", borderRadius: 15, padding: "10px 15px 15px 15px"}}>
                        <p style={{marginBottom: 8, marginTop:0 , color: "white"}} htmlFor=""><FontAwesomeIcon style={{...CSS.iconStyle, color: "#FCCA3E"}} icon={faStopwatch}/>Porcentaje de tiempo invertido diariamente por las personas
                        </p>
                        <div style={CSS.porcentajeBox}>
                            <button onClick={()=>abrirFTE()} style={{...CSS.btnRegistrar,...CSS.btnGeneral}} type="button">Registrar</button>
                            {/* Este input se cambia automáticamente */}
                            <div style={CSS.porcentajeFTE} name="FTE" type="number">
                                {/* MOSTRANDO el resultado de calcular el FTE */}
                                <h1 style={{fontSize: 22, margin: 0}}>{FTEresultado}%</h1>
                                </div>
                        </div>
                    </div>
                    {/* SALARIOPROMEDIO */}
                    <div style={CSS.inputBoxes}>
                    <Field style={{...CSS.inputs, ...CSS.inputStyle}} icono={faMoneyBillWave} iconoEstilo={{...CSS.iconStyle, color:"#05BE50"}} name="salarioPromedio" type="number" component={ventanaPrincipalComponent} placeholder="0" title="Salario promedio mensual de las personas que realizan esta operación"/>
                    <div>
                    </div>
                    </div>
                    {/* COSTOIMPLEMENTACION */}
                    <div style={CSS.inputBoxes}>
                        <Field style={{...CSS.inputs,...CSS.inputStyle}} icono={faRobot}  iconoEstilo={{...CSS.iconStyle, color:"#4427F8"}} name="costoImplementacion" type="number" component={ventanaPrincipalComponent} placeholder="0" title="Estimación del costo por la implementación del robot"/>
                    </div>
                    {/* AGREGARCOSTOS */}
                    <div style={{...CSS.inputBoxes, marginTop: 35, display: "flex", justifyContent: "center"}}>
                        <button onClick={()=>abrirCostosExtras()} style={{...CSS.btnAgregarCostos,...CSS.btnGeneral}} type="button">
                            <FontAwesomeIcon  icon={faPlusCircle} style={{color: "#4427F8", marginRight: 5, fontSize: 17}}/>
                            Agregar costos extras
                            </button>
                    </div>
                    {/* BOTONCALCULAR */}
                    <div style={{marginTop: 30, marginBottom: 3, display: "flex", justifyContent: "center"}}>
                        <button className="btnCalcular" disabled={(pristine || submitting)}>Calcular</button>
                    </div>
                </div>
            )
        }
        const ventanaFTE = ()=>{
            return(
                <div style={{...CSS.formCostosROI,width:280, padding:"20px 40px"}}>
                    <VentanaFTE Pristine={pristine} Submitting={submitting} estilos={CSS} openVentanaFTE={abrirFTE}/>
                </div>
            )
        }

        const ventanaCostosExtras = () =>{
            return(
                <div style={{...CSS.formCostosROI, width:280, padding:"10px 20px", overflow:"hidden"}}>
                    <VentanaCostosExtras index={index} actualizarCostosExtras={[...FTEvalue.costosExtras]} openVentanaCostosExtras= {abrirCostosExtras} />
                </div> 
            )
        }
        const popUps = ()=>{
            if(popUp){
                return ventanaFTE()
            }
            if(popUp2){
                return ventanaCostosExtras()
            }
            return ventanaPrincipal()
        }
        /* FUNCION PRINCIPAL */
        if(trigger){
            return(
            <form style={CSS.principalBox} onSubmit={handleSubmit}>
                {popUps()}
            </form>)}
        }
}
const mapStateToProps = (state) => ({
    initialValues: {
        ...state,
        rendimiento: "5.5"
    }
})
export default connect(mapStateToProps)(reduxForm({
    form: 'v_principal',
    validate,  
})(VentanaPrincipal))