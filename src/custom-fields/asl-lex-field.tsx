import { JsonFormsControls, JsonFormsReactService } from '@jsonforms/core';
import { VideoOption, VideoSelection } from './video-option-field';
import { AslLexService } from '../services/asl-lex.service';

export class AslLexSignBankField extends JsonFormsControls {
  tagSearchResults: VideoOption[] = [];
  signSearch = '';
  allowCustomLabels = false;

  constructor(jsonFormsService: JsonFormsReactService, protected aslLexService: AslLexService, protected changeDetectorRef: ChangeDetectorRef) {
    super(jsonFormsService);
  }

  selectOption(sign: VideoOption) {
    if (sign.isCustom) {
      this.setLabelValue(`custom: ${sign.value}`);
    } else {
      this.setLabelValue(`code: ${sign.value}`);
    }
  }

  async searchUpdate(search: string) {
    const signs = await this.aslLexService.getAslLexView(search);

    this.tagSearchResults = signs.map((sign: any) => {
      return {
        videoURL: sign.videoURL,
        code: sign.code,
        searchTerm: sign.englishTag
      };
    });
    this.changeDetectorRef.detectChanges();
  }

  private setLabelValue(value: string) {
    const path = composeWithUi(this.uischema as ControlElement, this.path);
    this.jsonFormsService.updateCore(Actions.update(path, () => value));
    this.triggerValidation();
  }
}
export const aslLexSignBankControlRendererTester = rankWith(10, (uischema: any, _schema: any, _rootSchema: any) => {
  return uischema.options != undefined && uischema.options.customType != undefined && uischema.options.customType == 'asl-lex';
});
