<?php
/**
 * @var \App\View\AppView $this
 * @var iterable<\App\Model\Entity\Filiai> $filiais
 */
?>
<div class="filiais index content">
    <?= $this->Html->link(__('New Filiai'), ['action' => 'add'], ['class' => 'button float-right']) ?>
    <h3><?= __('Filiais') ?></h3>
    <div class="table-responsive">
        <table>
            <thead>
                <tr>
                    <th><?= $this->Paginator->sort('id') ?></th>
                    <th><?= $this->Paginator->sort('id_fornecedor') ?></th>
                    <th><?= $this->Paginator->sort('name') ?></th>
                    <th><?= $this->Paginator->sort('ident_fiscal') ?></th>
                    <th class="actions"><?= __('Actions') ?></th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($filiais as $filiai): ?>
                <tr>
                    <td><?= $this->Number->format($filiai->id) ?></td>
                    <td><?= $this->Number->format($filiai->id_fornecedor) ?></td>
                    <td><?= h($filiai->name) ?></td>
                    <td><?= h($filiai->ident_fiscal) ?></td>
                    <td class="actions">
                        <?= $this->Html->link(__('View'), ['action' => 'view', $filiai->id]) ?>
                        <?= $this->Html->link(__('Edit'), ['action' => 'edit', $filiai->id]) ?>
                        <?= $this->Form->postLink(__('Delete'), ['action' => 'delete', $filiai->id], ['confirm' => __('Are you sure you want to delete # {0}?', $filiai->id)]) ?>
                    </td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
    <div class="paginator">
        <ul class="pagination">
            <?= $this->Paginator->first('<< ' . __('first')) ?>
            <?= $this->Paginator->prev('< ' . __('previous')) ?>
            <?= $this->Paginator->numbers() ?>
            <?= $this->Paginator->next(__('next') . ' >') ?>
            <?= $this->Paginator->last(__('last') . ' >>') ?>
        </ul>
        <p><?= $this->Paginator->counter(__('Page {{page}} of {{pages}}, showing {{current}} record(s) out of {{count}} total')) ?></p>
    </div>
</div>
