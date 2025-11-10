<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Filiai $filiai
 */
?>
<div class="row">
    <aside class="column">
        <div class="side-nav">
            <h4 class="heading"><?= __('Actions') ?></h4>
            <?= $this->Html->link(__('List Filiais'), ['action' => 'index'], ['class' => 'side-nav-item']) ?>
        </div>
    </aside>
    <div class="column-responsive column-80">
        <div class="filiais form content">
            <?= $this->Form->create($filiai) ?>
            <fieldset>
                <legend><?= __('Add Filiai') ?></legend>
                <?php
                    echo $this->Form->control('id_fornecedor');
                    echo $this->Form->control('name');
                    echo $this->Form->control('ident_fiscal');
                ?>
            </fieldset>
            <?= $this->Form->button(__('Submit')) ?>
            <?= $this->Form->end() ?>
        </div>
    </div>
</div>
