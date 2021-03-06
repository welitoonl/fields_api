import { inject, injectable } from "tsyringe";

import {
  IFieldsRepository,
  ICreateFieldDTO,
} from "../../repositories/IFieldsRepository";

@injectable()
class CreateFieldUseCase {
  constructor(
    @inject("FieldsRepository")
    private fieldsRepository: IFieldsRepository
  ) {}

  async execute({
    fieldId,
    label,
    position,
    type,
    typeRules,
  }: ICreateFieldDTO): Promise<void> {
    const fieldAlreadyExists = await this.fieldsRepository.findByFieldId(
      fieldId
    );

    if (fieldAlreadyExists) {
      throw new Error("Ops. O Campo já está em uso!");
    }

    const fieldWithPosition = await this.fieldsRepository.findByPosition(
      position
    );

    if (fieldWithPosition) {
      throw new Error("Ops. A posição selecionada já está em uso!");
    }

    await this.fieldsRepository.create({
      fieldId,
      label,
      position,
      type,
      typeRules,
    });
  }
}

export { CreateFieldUseCase };
