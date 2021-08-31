import React from "react";
import PAutorizadas from "../PessoasAutorizadas";

class RegistrationForms extends React.Component {
	mascaraDeTelefone(number) {
		const textoAtual = number.target.value;

		let textoAjustado;
        const textoHifem = textoAtual.replace(/[^\d]+/g,'');
        console.log(textoHifem.length);
        if(textoHifem.length === 11){
            const parte0 = textoHifem.slice(0, 2);
            const parte1 = textoHifem.slice(2, 7);
            const parte2 = textoHifem.slice(7, 11);
            textoAjustado = `(${parte0})${parte1}-${parte2}`;
        }else{
            textoAjustado = console.error("numero invalido");
        }
		

		number.target.value = textoAjustado;
		console.log(number.target.value);
	}

	handleSubmit(event){
		event.preventDefault();
		console.log(event);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="nome">Nome</label>
				<input type="text" name="nome" id="nome" />
				<label htmlFor="aniversario">Data de nascimento</label>
				<input
					type="date"
					name="aniversario"
					min="2005-01-01"
					max="2016-12-31"
					id="aniversario"
				/>
				<label htmlFor="responsavel">Nome do Responsável</label>
				<input type="text" name="nomeResponsavel" id="responsavel" />
				<label htmlFor="telefoneResponsavel">Telefone do Responsável</label>
				<input
					type="tel"
					maxLength="11"
					onBlur={this.mascaraDeTelefone}
					pattern="\([0-9]{2}\)[0-9]{4,6}-[0-9]{3,4}$"
					name="telefoneResponsavel"
					id="telefone"
                    required
				/>
				<label htmlFor="avisar">Em caso de emergência avisar:</label>
				<select name="avisar" id="avisar">
					<option value="Pais">Pais</option>
					<option value="Tios">Tios</option>
					<option value="Avos">Avós</option>
					<option value="Padrinhos">Padrinhos</option>
				</select>
				<label htmlFor="emergencia">Numero de Emergencia</label>
				<input
					type="tel"
					maxLength="11"
					onBlur={this.mascaraDeTelefone}
					pattern="\([0-9]{2}\)[0-9]{4,6}-[0-9]{3,4}$"
					name="telefoneEmergencia"
					id="emergencia"
					required
				/>

				<label htmlFor="restricaoAlimentar">Tem restrição alimentar</label>
				<div className="radio">
					<input type="radio" name="restricaoAlimentar" id="restricaoSim" />
					<label htmlFor="restricaoSim" className="label">
						Sim
					</label>

					<input type="radio" name="restricaoAlimentar" id="restricaoNao" />
					<label htmlFor="restricaoNão" className="label">
						Não
					</label>
				</div>
				<label htmlFor="descricaoRestricao">Descrição da restrição</label>
				<input type="text" name="restricaoAlimentar" id="descricaoRestricao" />
				<label htmlFor="autorizacaoFoto">Pode tirar foto do aluno?</label>
				<div className="radio">
					<input type="radio" name="autorizacaoFoto" id="fotoSim" />
					<label htmlFor="fotoSim" className="label">
						Sim
					</label>
					<input type="radio" name="autorizacaoFoto" id="fotoNao" />
					<label htmlFor="fotoNao" className="label">
						Não
					</label>
				</div>
				<PAutorizadas />
				<label htmlFor="turma">Turma</label>
				<input type="text" name="turma" id="turma" readOnly value="203" />
				<label htmlFor="observacoes">Observações Adicionais</label>
				<textarea
					name="observacoes"
					id="observacoes"
					cols="30"
					rows="10"
				></textarea>

				<button type="submit">Novo</button>
				<button type="submit">Salvar</button>
			</form>
		);
	}
}

export default RegistrationForms;
