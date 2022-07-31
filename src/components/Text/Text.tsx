import { styledText } from '@components/Text/Text.css';
import { RecipeVariants, WithChildren } from '@customTypes';

type Props = WithChildren<RecipeVariants<typeof styledText>>;

const Text = ({ size, children }: Props) => {
  return (
    <p
      className={styledText({
        size,
      })}
    >
      {children}
    </p>
  );
};

export default Text;
